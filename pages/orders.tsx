import { getSession, useSession } from 'next-auth/react'
import React from 'react'
import Header from '../components/Header'
import db from '../firebase'
import moment from 'moment'
import { collection, doc, getDocs } from 'firebase/firestore'
import Order from '../components/Order'

interface OrdersProps {
  orders: unknown[]
}

export default function Orders({ orders }: OrdersProps) {
  const session = useSession()

  return (
    <div className="flex flex-col bg-slate-100 ">
      <Header products={undefined!} />
      <h1
        className={`sm:text-3xl text-2xl pt-4 pl-4 font-bold mb-6 ${
          orders?.length == 0 ? 'hidden' : ''
        }`}
      >
        Your Orders
      </h1>
      {session.data == null ? (
        <div className="bg-[#f6f6f6] h-24 w-11/12 sm:w-3/4 text-lg sm:text-xl flex items-center justify-center self-center shadow-lg">
          <p>Please Sign In to view your orders.</p>
        </div>
      ) : orders?.length == 0 ? (
        <p
          className={`bg-[#f6f6f6] h-24 flex justify-center items-center shadow `}
        >
          <span className="text-xl font-semibold">
            You don&apos;t have any orders yet.
          </span>
        </p>
      ) : (
        <div className="flex flex-col items-center gap-4">
          {orders.map((order: any, index: number) => (
            <Order order={orders[index]} key={index} />
          ))}
        </div>
      )}
    </div>
  )
}

export async function getServerSideProps(context: any) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

  const session = await getSession(context)

  if (!session) {
    return {
      props: {},
    }
  }

  const docRef = doc(db, 'users', session?.user?.email!)
  const docSnap = await getDocs(collection(docRef, 'orders'))

  const orders = await Promise.all(
    docSnap.docs.map(async (order: any) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100,
        })
      ).data,
    }))
  )

  return {
    props: {
      orders,
    },
  }
}
