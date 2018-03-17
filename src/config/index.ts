export const port = 3344;
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
console.log(process.env.NODE_ENV);
export const isDev = process.env.NODE_ENV === 'development';
