import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export async function GET() {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  try {
    const prisma = new PrismaClient();

    let result = await prisma.tag.createMany({
      data: [
        {
          title: "Saudi is beautiful country",
          metaTitle: "Saudi",
          slug: "Saudi",
        },
        {
          title: "Palestine is beautiful country",
          metaTitle: "Palestine",
          slug: "Palestine",
        },
        {
          title: "Turkey is beautiful country",
          metaTitle: "Turkey",
          slug: "Turkey",
        },
        {
          title: "Iran is beautiful country",
          metaTitle: "Iran",
          slug: "Iran",
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

//     let result = await prisma.tag.update({
//       where: { id: 3 },
//       data: {
//         title: "Qatar",
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

//     let result = await prisma.tag.findMany({
//       where: { id: 4 },
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
