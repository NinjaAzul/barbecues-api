// import { hash } from 'bcryptjs';

// import { PrismaClient } from '@prisma/client';

// const prismaClient = new PrismaClient();

// async function main() {
//   const password = await hash('123456', 8);

//   await prismaClient.user.create({
//     data: {
//       name: 'Admin',
//       driver_license: '12345',
//       email: 'admin@rentx.com',
//       password,
//       username: 'rentxadmin',
//       is_admin: true,
//     },
//   });
// }

// main()
//   .catch((e) => {
//     console.log(e);
//     process.exit(1);
//   })
//   .finally(() => {
//     prismaClient.$disconnect();
//   });
