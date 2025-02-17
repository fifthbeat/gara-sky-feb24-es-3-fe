# Creazione e Esecuzione dell'Immagine Docker

## Creazione dell'Immagine

Per costruire l'immagine Docker, eseguire il seguente comando:

```sh
docker build -f Dockerfile -t es3-fe:0.0.1 .
```

## Esecuzione dell'Immagine
Per avviare un container basato sull'immagine creata, utilizzare:

```sh
docker run -p 3000:3000 -it es3-fe:0.0.1
```


## Accesso all'Applicazione
Una volta avviato il container, l'applicazione sarà accessibile all'indirizzo:

[http://localhost:3000](http://localhost:3000)
