import { buffer } from 'micro'
import * as admin from 'firebase-admin'
import { checkCustomRoutes } from 'next/dist/lib/load-custom-routes'
import permissionConfig from '../../permissionConfig'

//get connection to firebase from the backend
const serviceAccount = require(permissionConfig)

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app()

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fufillOrder = async (session) => {
  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS Order ${session.id} had been added to the DB`)
    })
}

export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const sig = req.headers['stripe-signature']

    let event

    //verify came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret)
    } catch (err) {
      console.log('ERROR', err.message)
      return res.status(400).send(`Webhook error: ${err.message}`)
    }

    //handle checkout session completed event
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object

      //fufill order
      return fufillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`))
    }
  }
}

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
}
