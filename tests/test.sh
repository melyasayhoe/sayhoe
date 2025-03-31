#!/bin/bash
if [ -f "public/index.html" ]; then
    echo "Тест пройден: файл index.html существует"
    exit 0
else
    echo "Тест не пройден: файл index.html не найден"
    exit 1
fi
