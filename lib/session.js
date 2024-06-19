export const sessionOptions = {
    password: process.env.SECRET_COOKIE_PASSWORD,
    cookieName: "iron-session/griffin/next.js",
    cookieOptions: {
        secure: process.env.NODE_ENV === "production",
    },
};

// // This is where we specify the typings of req.session.*
// declare module "iron-session" {
//     interface IronSessionData {
//         user?: User;
//     }
// }