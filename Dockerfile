FROM node:lts AS runtime
WORKDIR /app

COPY . .

RUN npm install -g serve
RUN npm run build

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD ["serve", "dist", "-l", "4321"]