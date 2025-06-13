# Usar imagen oficial de Node
FROM node:20

# Establecer el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copiar archivos al contenedor
COPY package.json package-lock.json ./
RUN npm install
COPY . .

# Exponer el puerto para el servidor
EXPOSE 8080

# Comando para arrancar la app
CMD ["node", "server.js"]