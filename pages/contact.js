import Page from '@components/page'

const Contact = () => {
  return (
    <Page title="Contact" footer={false} description="Keep in touch with us.">
      <article>
        <p>Contact with us at...</p>

        <blockquote>
          <a
            href="mailto:cctld@uzinfocom.uz?subject=Hello Uzinfocom!"
            className="reset"
          >
            info@uzinfocom.uz
          </a>
        </blockquote>

        <p>...or you can reach our PR staffs.</p>

        <blockquote>
          <a href="https://t.me/@MiyassarovT" className="reset">
            Timur Miyassarov - @MiyassarovT
          </a>
        </blockquote>

        <blockquote>
          <a href="https://t.me/DavlatbekNasirov" className="reset">
            Davlatbek Nasirov - @DavlatbekNasirov
          </a>
        </blockquote>
      </article>
    </Page>
  )
}

export default Contact
