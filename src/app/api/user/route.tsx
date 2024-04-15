import prisma from '@/../../lib/prisma';
import { User } from '@prisma/client';

export async function POST(request: Request) {
  const body = await request.json();
  const username = body?.username;
  try {
    const user = await prisma.user.upsert({
      where: { username: body?.username },
      update: {
        ...body,
      } as User,
      create: {
        ...body,
      } as User,
    });
    return Response.json({ user });
  } catch (error) {
    console.error(error);
    return Response.json({ error });
  }
}
