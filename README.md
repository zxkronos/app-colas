# Notas:

Este es un servidor de express listo para ejecutarse y servir la carpeta public en la web.

se reconstruyen los módulos de node con el comando

```
npm install
```

son 3 pantallas una donde se generan los tickets del cliente, otra que muestra al cliente en que ticket van y otra en donde el usuario va resolviendo los tickets. Las tres se comunican de forma simultanea por sockets, cuando se resuelve un ticket se actualiza automaticamente la pantalla.
