import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function handler(req: any, res: any) {
  if (req.method === 'GET') {
    const status = await prisma.truckStatus.findUnique({
      where: { id: 1 },
    });
    res.json({ isTruckHere: status?.is_here });
  } else if (req.method === 'POST') {
    const { isTruckHere } = req.body;
    await prisma.truckStatus.update({
      where: { id: 1 },
      data: { is_here: isTruckHere },
    });
    res.status(200).send();
  } else {
    res.status(405).send();
  }
}
