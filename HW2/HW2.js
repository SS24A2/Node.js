/*
- Креирање на модул за конверзија на вредности од еден во друг систем 
(mi -> km, c -> f, lbs -> kg, ft -> m)

- Направете фајл: conversion.js
function convertMilesToKm(1) -> 1.6
function convertCelsuisToFahrenheit(param)
function convertPoundsToKilogram(param)
funtion convertFeetToMetres(param)

- Овие четири функции да се извршуваат во index.js фајлот

*/

const { convertMilesToKm, convertCelsuisToFahrenheit, convertPoundsToKilogram, convertFeetToMetres } = require("./conversion")

console.log(convertMilesToKm(120))
console.log(convertCelsuisToFahrenheit(25))
console.log(convertPoundsToKilogram(130))
console.log(convertFeetToMetres(21))