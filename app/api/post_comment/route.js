import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();

    let result = await prisma.post_comment.createMany({
      data: [
        {
          title: "Coconut Food",
        },
        {
          title: "Peach Food",
        },
        {
          title: "Apple Food",
        },
        {
          title: "Orange Food",
        },
      ],
    });

    console.log(result);
    return NextResponse.json({ status: "Success", result: result });
  } catch (error) {
    return NextResponse.json({ status: "Failed", result: error.toString() });
  }
}

// Data Update Query =========================================

// export async function GET() {
//   BigInt.prototype.toJSON = function () {
//     return this.toString();
//   };
//   try {
//     const prisma = new PrismaClient();

//     let result = await prisma.post_comment.update({
//       where: { id: 18 },
//       data: {
//         title: "Water Malen",
//       },
//     });
//     console.log(result);
//     return NextResponse.json({ status: "Success", result: result });
//   } catch (error) {
//     return NextResponse.json({ status: "Failed", result: error.toString() });
//   }
// }

// Data Delete Query =========================================

// export async function GET() {
//   try {
//     const prisma = new PrismaClient();

//     let result = await prisma.post_comment.delete({
//       where: { id: 21 },
//     });
//     console.log(result);
//     return NextResponse.json({ status: "Success", result: result });
//   } catch (error) {
//     return NextResponse.json({ status: "Failed", result: error });
//   }
// }

// Data Find Many Query =========================================

// export async function GET() {
//   try {
//     const prisma = new PrismaClient();

//     let result = await prisma.post_comment.findMany({
//       where: { id: 22 },
//       select: {
//         title: true,
//         published: true,
//       },
//     });
//     console.log(result);
//     return NextResponse.json({ status: "Success", result: result });
//   } catch (error) {
//     return NextResponse.json({ status: "Failed", result: error });
//   }
// }
