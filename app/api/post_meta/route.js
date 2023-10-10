import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();

    let result = await prisma.post_meta.createMany({
      data: [
        {
          key: "1",
        },
        {
          key: "2",
        },
        {
          key: "3",
        },
        {
          key: "4",
        },
        {
          key: "5",
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

//     let result = await prisma.post.update({
//       where: { id: 3 },
//       data: {
//         title: "Allu is durty boy",
//         slug: "DURTY",
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

//     let result = await prisma.post.delete({
//       where: { id: 6 },
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

//     let result = await prisma.post.findMany({
//       where: { id: 3 },
//       select: {
//         title: true,
//         slug: true,
//       },
//     });
//     console.log(result);
//     return NextResponse.json({ status: "Success", result: result });
//   } catch (error) {
//     return NextResponse.json({ status: "Failed", result: error });
//   }
// }
