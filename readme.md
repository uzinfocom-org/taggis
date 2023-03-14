<header>
<img src="https://oss.uzinfocom.uz/favicons/pinned.svg" alt="logo" height="100" align="left">
<h1 style="display: inline">Socials</h1>

Uzinfocom Open Source tomonidan ishlab chiqilgan sotsial tarmoq uchun web sahifa.

[![GitHub top language](https://img.shields.io/github/languages/top/uzinfocom-org/website?style=flat-square&logo=github)](https://github.com/uzinfocom-org/taggis)
[![Channel](https://img.shields.io/badge/Chat-grey?style=flat-square&logo=telegram)](https://t.me/uzinfocom_oss)
[![Test CI](https://github.com/uzinfocom-org/taggis/actions/workflows/test.yml/badge.svg)](https://github.com/uzinfocom-org/taggis/actions/workflows/test.yml)
[![Build CI](https://github.com/uzinfocom-org/taggis/actions/workflows/build.yml/badge.svg)](https://github.com/uzinfocom-org/taggis/actions/workflows/build.yml)

</header>

## Ma'lumot

Ushbu websayt Next.js va Node.js texnologiyalarning eng oldingi versiyalarida ishlaydi. Unday hech qancha g'aroyibot narsa yo'q. Oddiygina React komponentlari
va CSS yordamida yozilgan web sahifalar.

> Ushbu websaytdagi hamma kontentlar statik joylashtirilgan, agarda xatolik topsangiz "pull request" yuborishingiz mumkin.

## Ishga tushurish

Ushbu websaytni ishga tushurish uchun, Node.js ning eng so'nggi LTS versiyasini (hozir 18.x.x) o'rnatishingiz va pnpm ni global tarzda o'rnatishingiz kerak.
Keyin quyidagi buyruqlarni bajarishingiz mumkin:

```bash
pnpm install
pnpm run dev
```

## Docker

Hamda, GitHub kontenerlar registriga joylashtirilgan docker obrazini ishga tushurishingiz mumkin:

```bash
docker run -p 3000:3000 ghcr.io/uzinfocom-org/taggis:latest
```

## Litsenziya

Ushbu loyihani [MIT litsenziyasi](LICENSE) asosida ochiq tarzda berilgan.
