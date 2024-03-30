import prisma from '_/lib/prisma'
import { NextResponse } from 'next/server'

export async function GET(req: NextResponse) {
  try {
    const task = await prisma.task.findMany()
    return NextResponse.json({ data: task }, { status: 200 })
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ message: error.message }, { status: 500 })
  }
}
