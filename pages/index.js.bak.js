import Page from '@components/page'
import Link from '@components/link'
import Spotify from '@components/spotify/now-listening'

const Index = () => {
  return (
    <Page description="Salom! Biz Uzinfocom Open Source miz va biz o'zbek open source jamiyati o'sishiga o'z hissamizni qo'shamiz.">
      <article>
        <h1 className="hero">Uzinfocom Open Source</h1>

        <p>
          <Link underline href="https://uzinfocom.uz/uz/" external>
            Uzinfocom
          </Link>{' '}
          Organizatsiyasi tomonidan tashkil topgan va O'zbek Open Source ini
          rivojlantirishga qaratilgan tashkilot. Bizda har xil katta va kichik
          loyihalar mavjud. Bizning{' '}
          <Link underline href="/blog">
            blogimiz
          </Link>{' '}
          kuzatib borishingiz mumkin.
        </p>

        <p align="center">
          Sehr yuz berishi uchun <code>⌘ + K</code> yoki <code>Alt + K</code>{' '}
          tugmalarini bosing. Agarda ushbu usul ish bermasa, yuqoridagi ⌘
          tugmasi orqali harakatni davom ettirishingiz mumkin...
        </p>

        {/*<Spotify />*/}
      </article>
    </Page>
  )
}

export default Index
