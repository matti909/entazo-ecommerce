export interface SessionData {
  username: string;
  isLoggedIn: boolean;
}

export const defaultSession: SessionData = {
  username: "",
  isLoggedIn: false,
};

export const sessionOptions = {
  password: "secret1234",
  cookieName: "entazo_session",
  cookieOptions: {
    httpOnly: true,
    secure: false,
    maxAge: 60 * 60,
  },
};
