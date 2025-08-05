FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install
RUN VERCEL=0 npm run build  # Forzamos build Node standalone

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321

CMD ["node", "./dist/server/entry.mjs"]
