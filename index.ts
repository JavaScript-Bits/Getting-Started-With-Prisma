import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()


/**
 * 1. Create A New User
 */
const createUser = async () => {
  try {
    await prisma.user.create({
      data: {
        name: "Tim",
        email: "tim@example.com",
        posts: {
          create: {
            title: 'Getting Started With Prisma',
            slug: 'getting-started-with-prisma',
            body: 'A have no idea what to add here but you get the gist'
          }
        }
      }
    })
  } catch (error) {
    console.error(error)
  }
}

// createUser()

/**
 * 2. Get All Users
 */
const getAllUsers = async () => {
  try {
    const allUsers = await prisma.user.findMany()
    console.log(allUsers)
  } catch (error) {
    console.error(error)
  }
}

// getAllUsers()


/**
 * 3. Update Posts
 */
const updatePost = async () => {
  try {
    await prisma.post.update({
      where: {
        slug: 'getting-started-with-prisma'
      },
      data: {
        comments: {
          createMany: {
            data: [
              {
                comment: 'This is comment One'
              },
              {
                comment: 'This is another One'
              }
            ]
          }
        }
      }
    })
  } catch (error) {
    
  }
}

// updatePost()

/**
 * 4. Get All Posts
 */

const getAllPosts = async () => {
  try {
    const posts = await prisma.post.findMany({
      include: {
        comments: true
      }
    })
    console.log(posts)
  } catch (error) {
    console.error(error)
  }
}

// getAllPosts()