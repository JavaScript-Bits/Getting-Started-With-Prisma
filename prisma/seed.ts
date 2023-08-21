import { PrismaClient, Prisma } from '@prisma/client'

const prisma = new PrismaClient()

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'Tim',
    email: 'tim@email.com',
    posts: {
      create: [
        {
          title: 'Its All About Prisma Today',
          content: 'Best ORM',
          published: true,
        },
      ],
    },
  },
  {
    name: 'Prince',
    email: 'prince@email.com',
    posts: {
      create: [
        {
          title: 'Yes, I am also a Prince',
          content: 'I can do Princy things',
          published: true,
        },
      ],
    },
  }
]

async function main() {
  console.log(`Start seeding ...`)
  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    })
    console.log(`Created user with id: ${user.id}`)
  }
  console.log(`Seeding finished.`)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })