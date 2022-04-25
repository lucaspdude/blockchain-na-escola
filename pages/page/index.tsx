import type { GetStaticProps, NextPage } from 'next'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Heading from '../../components/Heading'
import Typography from '../../components/Typography'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import { useTranslation } from 'next-i18next'
export const getStaticProps: GetStaticProps = async (props) => {
  return {
    props: {
      ...(await serverSideTranslations(props.locale || 'pt-BR', ['common'])),
      // Will be passed to the page component as props
    },
  }
}

const Page: NextPage = () => {
  const { t } = useTranslation('common')

  return (
    <div>
      <Heading variant="h2">{t('page')}</Heading>
      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        cupiditate similique vitae esse ab non sequi dolorum vel amet vero eius
        ex, nihil eaque maiores ipsam fugiat voluptatibus voluptate accusamus
        aperiam. Hic provident, dignissimos voluptatum et aut a molestiae
        cupiditate consequatur quis qui accusamus ipsum voluptate. Similique
        corporis molestias autem error debitis optio, nostrum dicta placeat
        laboriosam esse. Voluptates totam accusantium, quos iusto odit rerum
        repellat vero hic, autem rem iure natus beatae soluta dignissimos alias
        nisi eum facere iste consequuntur aut. Ipsam in fugit illum ea soluta
        impedit ducimus excepturi perferendis eligendi quis. Ad quaerat facilis
        eaque aut reprehenderit officia inventore? Fugit, ratione accusantium.
        Aspernatur nesciunt ad repudiandae voluptates quasi! Unde error quaerat
        mollitia, harum repudiandae sapiente amet a consectetur! Placeat cum
        quia vitae. Ab voluptatum quae impedit enim distinctio, perspiciatis
        ullam mollitia placeat dolore inventore sed officia quam sit laudantium
        adipisci tempore quos animi ipsa repellendus pariatur voluptatibus,
        porro temporibus possimus? Reprehenderit voluptates exercitationem magni
        cupiditate repudiandae! Reprehenderit sit aliquid non voluptatibus illo,
        tenetur corrupti necessitatibus dignissimos hic id adipisci esse neque
        pariatur soluta ipsum laudantium molestiae et. Iure veniam dolore
        laudantium nostrum distinctio amet ratione, illo hic facilis deserunt
        nihil dolorum reprehenderit voluptatibus sequi fugiat soluta et eius
        exercitationem odit, modi suscipit molestias fugit est? Ratione nostrum
        harum, eveniet at dolor soluta natus, non mollitia reiciendis
        perspiciatis voluptate hic libero laudantium dignissimos. Nisi tempore
        quis mollitia error aspernatur distinctio nesciunt perferendis, placeat
        doloremque harum ducimus? Vero eligendi dicta, debitis sunt nemo
        laboriosam minima quibusdam dignissimos pariatur officia, earum ullam
        non exercitationem illum sed a perspiciatis nobis autem at reiciendis
        neque quo saepe iste! Sed numquam eos impedit illo totam neque quod,
        laboriosam voluptatem nostrum iusto aut magni reprehenderit debitis
        consectetur, ex hic? Perspiciatis inventore laborum quis corrupti est et
        dolore, laudantium eaque officia adipisci iure, quisquam eveniet non
        minima explicabo. Molestias eaque temporibus libero quaerat voluptates
        aut! Ea, veniam. Ipsum ipsam amet eligendi similique deserunt est,
        recusandae sunt eum necessitatibus sint consectetur voluptas veniam?
        Nisi, nulla! Animi corrupti dicta neque obcaecati? Minima possimus quis
        ea ullam est vel magni qui iste ipsam itaque nostrum earum dolorem
        officiis consequatur, excepturi voluptatem consectetur unde. Ducimus qui
        expedita repellendus voluptate.
      </Typography>

      <Typography>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
        cupiditate similique vitae esse ab non sequi dolorum vel amet vero eius
        ex, nihil eaque maiores ipsam fugiat voluptatibus voluptate accusamus
        aperiam. Hic provident, dignissimos voluptatum et aut a molestiae
        cupiditate consequatur quis qui accusamus ipsum voluptate. Similique
        corporis molestias autem error debitis optio, nostrum dicta placeat
        laboriosam esse. Voluptates totam accusantium, quos iusto odit rerum
        repellat vero hic, autem rem iure natus beatae soluta dignissimos alias
        nisi eum facere iste consequuntur aut. Ipsam in fugit illum ea soluta
        impedit ducimus excepturi perferendis eligendi quis. Ad quaerat facilis
        eaque aut reprehenderit officia inventore? Fugit, ratione accusantium.
        Aspernatur nesciunt ad repudiandae voluptates quasi! Unde error quaerat
        mollitia, harum repudiandae sapiente amet a consectetur! Placeat cum
        quia vitae. Ab voluptatum quae impedit enim distinctio, perspiciatis
        ullam mollitia placeat dolore inventore sed officia quam sit laudantium
        adipisci tempore quos animi ipsa repellendus pariatur voluptatibus,
        porro temporibus possimus? Reprehenderit voluptates exercitationem magni
        cupiditate repudiandae! Reprehenderit sit aliquid non voluptatibus illo,
        tenetur corrupti necessitatibus dignissimos hic id adipisci esse neque
        pariatur soluta ipsum laudantium molestiae et. Iure veniam dolore
        laudantium nostrum distinctio amet ratione, illo hic facilis deserunt
        nihil dolorum reprehenderit voluptatibus sequi fugiat soluta et eius
        exercitationem odit, modi suscipit molestias fugit est? Ratione nostrum
        harum, eveniet at dolor soluta natus, non mollitia reiciendis
        perspiciatis voluptate hic libero laudantium dignissimos. Nisi tempore
        quis mollitia error aspernatur distinctio nesciunt perferendis, placeat
        doloremque harum ducimus? Vero eligendi dicta, debitis sunt nemo
        laboriosam minima quibusdam dignissimos pariatur officia, earum ullam
        non exercitationem illum sed a perspiciatis nobis autem at reiciendis
        neque quo saepe iste! Sed numquam eos impedit illo totam neque quod,
        laboriosam voluptatem nostrum iusto aut magni reprehenderit debitis
        consectetur, ex hic? Perspiciatis inventore laborum quis corrupti est et
        dolore, laudantium eaque officia adipisci iure, quisquam eveniet non
        minima explicabo. Molestias eaque temporibus libero quaerat voluptates
        aut! Ea, veniam. Ipsum ipsam amet eligendi similique deserunt est,
        recusandae sunt eum necessitatibus sint consectetur voluptas veniam?
        Nisi, nulla! Animi corrupti dicta neque obcaecati? Minima possimus quis
        ea ullam est vel magni qui iste ipsam itaque nostrum earum dolorem
        officiis consequatur, excepturi voluptatem consectetur unde. Ducimus qui
        expedita repellendus voluptate.
      </Typography>
    </div>
  )
}

export default Page
