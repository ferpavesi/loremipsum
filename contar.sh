#!/bin/bash


#version 0.1 --> devuelve por el archivo que le indico
#wc -l loremipsum-1.txt loremipsum-2.txt loremipsum-3.txt loremipsum-4.txt loremipsum-5.txt

#version 0.2 --> devuelve por toods los archivos que contengan .txt en la carpeta y ordena
#wc -l $(find . -name "*.txt") | sort -nr

#version 0.3 --> devuelve los mismo que el código de arriba, pero el la impresión es personalizada (sin ordenar)
find -type f -name "*.txt" | while read ARCHIVO; do
     cuenta=$(wc -l < "$ARCHIVO")
     echo "$ARCHIVO tiene $cuenta líneas"
done | sort
