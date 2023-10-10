import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  try {
    const prisma = new PrismaClient();

    let result = await prisma.user.createMany({
      data: [
        {
          firstName: "Ajay",
          middleName: "Harsh",
          lastName: "Mehta",
          mobile: "776667777",
          email: "ajay@gmail.com",
          password: "858585",
        },
        {
          firstName: "Mithi",
          middleName: "Rani",
          lastName: "Gupta",
          mobile: "776667777",
          email: "mithi@gmail.com",
          password: "858585",
        },
        {
          firstName: "Raju",
          middleName: "Ahsan",
          lastName: "Sarker",
          mobile: "776667777",
          email: "jdjd@gmail.com",
          password: "858585",
        },
        {
          firstName: "Picchi",
          middleName: "Moni",
          lastName: "Sarker",
          mobile: "776667777",
          email: "picchi@gmail.com",
          password: "858585",
        },
      ],
    });
    console.log(result);
    return NextResponse.json({ status: "Success", result: result });
  } catch (error) {
    return NextResponse.json({ status: "Failed", result: error });
  }
}

// Data Update Query =========================================

// export async function GET() {
//   BigInt.prototype.toJSON = function () {
//     return this.toString();
//   };
//   try {
//     const prisma = new PrismaClient();

//     let result = await prisma.user.update({
//       where: { id: 2 },
//       data: {
//         firstName: "Allu",
//         middleName: "Harsh",
//         lastName: "Sarker",
//         mobile: "776667777",
//         email: "himesh@gmail.com",
//         password: "858585",
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

//     let result = await prisma.user.delete({
//       where: { id: 2 },
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

//     let result = await prisma.user.findMany({
//       where: { id: 3 },
//       select: {
//         firstName: true,
//         lastName: true,
//       },
//     });
//     console.log(result);
//     return NextResponse.json({ status: "Success", result: result });
//   } catch (error) {
//     return NextResponse.json({ status: "Failed", result: error });
//   }
// }
