import type { Meta, StoryObj } from '@storybook/react';
import { ScrollArea, ScrollAreaScrollbar, ScrollAreaThumb, ScrollAreaViewport } from '.';

const meta: Meta<typeof ScrollArea> = {
  title: 'UI/ScrollArea',
  component: ScrollArea,
  args: {
    type: 'hover',
    scrollHideDelay: 600,
    children: <></>,
  },
  argTypes: {
    type: { control: 'select' },
    children: { control: false },
  },
};

export default meta;
type Story = StoryObj<typeof ScrollArea>;

export const WithVerticalScrollbar: Story = {
  args: {
    children: (
      <>
        <ScrollAreaViewport className="h-32 border border-neutral-5 p-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae deserunt voluptatibus
            accusantium adipisci quas. Cumque, quidem aspernatur eos atque, esse assumenda, nobis
            dignissimos harum dolor suscipit enim. Ad, aperiam? Placeat, omnis fugiat quam ratione
            molestias minus accusamus! Ipsum eaque quas placeat sit cumque animi dignissimos omnis,
            temporibus ab deserunt quidem rem repellendus, ad necessitatibus nisi distinctio tenetur
            corrupti itaque cupiditate enim? Repudiandae explicabo dolor quis quia hic, totam quas
            repellat. Nulla neque non repellat aliquid quas, quo deleniti a! Ea adipisci velit fuga
            voluptatem quis sapiente incidunt quos consequuntur voluptas doloribus. Quod eos
            repellat numquam, fugit quasi debitis quibusdam exercitationem expedita officiis iure
            itaque at vitae odit facilis minima, veritatis enim sapiente doloremque! Delectus
            voluptates cum eaque modi nihil deserunt natus, qui atque similique illo dolores, in
            maiores, veritatis quibusdam error libero consequatur laborum nesciunt possimus
            dignissimos nisi numquam ex. Odit quam tempore facere magnam ipsum eveniet odio
            accusamus optio iste aliquam vero recusandae libero rem sequi molestias vel, incidunt
            nostrum. Velit libero vitae illum quasi delectus, ut unde eaque. Consectetur, velit
            suscipit debitis sequi odio dolorem quas esse asperiores repudiandae numquam eveniet,
            reprehenderit aut? Aliquid incidunt, praesentium beatae neque rem natus laudantium
            laboriosam recusandae, maxime inventore non saepe minus rerum illum ullam autem ad
            dolores atque odit voluptates adipisci excepturi esse. Hic corrupti ratione fugiat
            harum? Debitis voluptate tenetur error asperiores, voluptatibus dignissimos doloribus
            qui odio corporis, dolores quia vel quisquam illo in. Doloremque, obcaecati, minus vel
            officia velit distinctio esse adipisci, fugiat laborum quo accusamus saepe possimus est
            quisquam? Ea, voluptatem voluptates ullam numquam facilis maiores, repellat facere nihil
            et in praesentium ab dicta repudiandae commodi hic ipsam eveniet odit dolore eligendi
            ipsum officiis aperiam itaque? Assumenda vero illo tempore officia blanditiis a,
            praesentium similique accusantium atque asperiores commodi libero, distinctio odit natus
            aperiam velit, recusandae impedit quas facere! Nulla dolorem aspernatur tempora aut
            repudiandae inventore nobis voluptates est quos hic possimus, quasi ducimus consectetur
            ipsam. Vitae molestiae earum consequuntur tempore quis libero minus recusandae cum
            doloribus ipsam enim, nisi eaque, mollitia officiis distinctio id suscipit veritatis ea
            consequatur nostrum reprehenderit facere in sequi. Corrupti soluta eligendi maiores sit
            optio explicabo quas totam fugiat corporis recusandae autem ad, alias distinctio porro
            earum dolor tempore. Dignissimos cum velit sunt rem quo atque veniam voluptatum nesciunt
            unde aut veritatis corrupti quia, accusamus vero vitae libero totam placeat assumenda,
            aliquid, nemo nam? Vero corporis nobis dicta exercitationem impedit corrupti soluta
            voluptatibus aliquid tenetur similique, harum consequatur a, quia ea dignissimos? Saepe
            et iure accusantium impedit nesciunt. Iure reiciendis, hic fuga quisquam quo ea dolorem
            eaque distinctio pariatur ut aspernatur aliquam aut dolorum, labore nulla ipsam nemo
            quas sequi? Corporis, iste incidunt. Temporibus dolorem quaerat corrupti sed doloribus!
            Corporis cum excepturi, repudiandae cumque, ex earum ipsa ad iusto ipsum, exercitationem
            tempora aspernatur et odit eius aliquam laborum ducimus asperiores officia. Non iste
            libero officia possimus, corrupti fugit sint deserunt odit facere aliquid ea, cupiditate
            ex adipisci placeat pariatur unde fugiat facilis magnam nesciunt illo vel alias? Modi
            iure voluptates repellendus veritatis.
          </p>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="vertical">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </>
    ),
  },
};

export const WithHorizontalScrollbar: Story = {
  args: {
    children: (
      <>
        <ScrollAreaViewport className="border border-neutral-5 p-4">
          <p className="w-[2000px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero quae deserunt voluptatibus
            accusantium adipisci quas. Cumque, quidem aspernatur eos atque, esse assumenda, nobis
            dignissimos harum dolor suscipit enim. Ad, aperiam? Placeat, omnis fugiat quam ratione
            molestias minus accusamus! Ipsum eaque quas placeat sit cumque animi dignissimos omnis,
            temporibus ab deserunt quidem rem repellendus, ad necessitatibus nisi distinctio tenetur
            corrupti itaque cupiditate enim? Repudiandae explicabo dolor quis quia hic, totam quas
            repellat. Nulla neque non repellat aliquid quas, quo deleniti a! Ea adipisci velit fuga
            voluptatem quis sapiente incidunt quos consequuntur voluptas doloribus. Quod eos
            repellat numquam, fugit quasi debitis quibusdam exercitationem expedita officiis iure
            itaque at vitae odit facilis minima, veritatis enim sapiente doloremque! Delectus
            voluptates cum eaque modi nihil deserunt natus, qui atque similique illo dolores, in
            maiores, veritatis quibusdam error libero consequatur laborum nesciunt possimus
            dignissimos nisi numquam ex. Odit quam tempore facere magnam ipsum eveniet odio
            accusamus optio iste aliquam vero recusandae libero rem sequi molestias vel, incidunt
            nostrum. Velit libero vitae illum quasi delectus, ut unde eaque. Consectetur, velit
            suscipit debitis sequi odio dolorem quas esse asperiores repudiandae numquam eveniet,
            reprehenderit aut? Aliquid incidunt, praesentium beatae neque rem natus laudantium
            laboriosam recusandae, maxime inventore non saepe minus rerum illum ullam autem ad
            dolores atque odit voluptates adipisci excepturi esse. Hic corrupti ratione fugiat
            harum? Debitis voluptate tenetur error asperiores, voluptatibus dignissimos doloribus
            qui odio corporis, dolores quia vel quisquam illo in. Doloremque, obcaecati, minus vel
            officia velit distinctio esse adipisci, fugiat laborum quo accusamus saepe possimus est
            quisquam? Ea, voluptatem voluptates ullam numquam facilis maiores, repellat facere nihil
            et in praesentium ab dicta repudiandae commodi hic ipsam eveniet odit dolore eligendi
            ipsum officiis aperiam itaque? Assumenda vero illo tempore officia blanditiis a,
            praesentium similique accusantium atque asperiores commodi libero, distinctio odit natus
            aperiam velit, recusandae impedit quas facere! Nulla dolorem aspernatur tempora aut
            repudiandae inventore nobis voluptates est quos hic possimus, quasi ducimus consectetur
            ipsam. Vitae molestiae earum consequuntur tempore quis libero minus recusandae cum
            doloribus ipsam enim, nisi eaque, mollitia officiis distinctio id suscipit veritatis ea
            consequatur nostrum reprehenderit facere in sequi. Corrupti soluta eligendi maiores sit
            optio explicabo quas totam fugiat corporis recusandae autem ad, alias distinctio porro
            earum dolor tempore. Dignissimos cum velit sunt rem quo atque veniam voluptatum nesciunt
            unde aut veritatis corrupti quia, accusamus vero vitae libero totam placeat assumenda,
            aliquid, nemo nam? Vero corporis nobis dicta exercitationem impedit corrupti soluta
            voluptatibus aliquid tenetur similique, harum consequatur a, quia ea dignissimos? Saepe
            et iure accusantium impedit nesciunt. Iure reiciendis, hic fuga quisquam quo ea dolorem
            eaque distinctio pariatur ut aspernatur aliquam aut dolorum, labore nulla ipsam nemo
            quas sequi? Corporis, iste incidunt. Temporibus dolorem quaerat corrupti sed doloribus!
            Corporis cum excepturi, repudiandae cumque, ex earum ipsa ad iusto ipsum, exercitationem
            tempora aspernatur et odit eius aliquam laborum ducimus asperiores officia. Non iste
            libero officia possimus, corrupti fugit sint deserunt odit facere aliquid ea, cupiditate
            ex adipisci placeat pariatur unde fugiat facilis magnam nesciunt illo vel alias? Modi
            iure voluptates repellendus veritatis.
          </p>
        </ScrollAreaViewport>
        <ScrollAreaScrollbar orientation="horizontal">
          <ScrollAreaThumb />
        </ScrollAreaScrollbar>
      </>
    ),
  },
};
