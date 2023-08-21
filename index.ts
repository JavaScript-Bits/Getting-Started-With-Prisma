import express from 'express'
import { PrismaClient } from '@prisma/client'

const app = express()
const prisma = new PrismaClient()

app.use(express.json())


app.get('/users', async (req, res) => {
  try {
    const users = await prisma.user.findMany()
    res.json(users)
  } catch (error) {
    console.log(error)
  }
})

app.post('/signup', async (req, res) => {
  try {
    const { name, email } = req.body
    const newUser = await prisma.user.create({
      data: {
        name,
        email
      }
    })
    res.json(newUser)
  } catch (error) {
    console.log(error)
  }
})

app.post('/posts', async (req, res) => {
  try {
    const { title, content, authorEmail } = req.body

    const newPost = await prisma.post.create({
      data: {
        title,
        content,
        author: {
          connect: {
            email: authorEmail
          }
        }
      }
    })

    res.json(newPost)
  } catch (error) {
    console.log(error)
  }
})

app.put("/posts/:id/views", async (req, res) => {
  try {
    const { id } = req.params;

    const updatePost = await prisma.post.update({
      where: {
        id,
      },
      data: {
        viewCount: {
          increment: 1,
        },
      },
    });

  res.json(updatePost);
  } catch (error) {
    console.log(error)
  }
});

app.listen(3000, () => {
  console.log(`Server running on PORT, 3000`)
})