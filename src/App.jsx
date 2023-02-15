import { Hero, Navbar } from "./components";
import { useAppContext } from "./context/app.context";

function App() {
  const { setScrolValue} = useAppContext();
  const handleScroll = event => {
    setScrolValue(event.currentTarget.scrollTop);
  };

  return (
    <div
      className={`w-screen h-screen bg-no-repeat bg-cover bg-top bg-fixed overflow-x-hidden`}
      onScroll={handleScroll}
    >
      <Navbar />
      <Hero />
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore
        voluptates dolorum, totam eum expedita perferendis consequatur, maxime
        quod harum consequuntur recusandae iure, vero ab veniam. Quaerat
        voluptatum minus ipsam laborum explicabo eos, quisquam beatae nihil illo
        perferendis aut minima recusandae libero? Minima dolore eligendi a, ex
        distinctio voluptates culpa dolor porro aliquid nemo quas! Aut
        blanditiis non recusandae explicabo, doloremque eum, debitis deleniti
        impedit omnis molestias deserunt nostrum pariatur nam, neque dignissimos
        quisquam doloribus unde quis accusamus aspernatur ratione nisi! Ex
        dolore nihil, consequuntur magni culpa debitis blanditiis quae error,
        laboriosam sit hic voluptas quisquam quo, autem reprehenderit nobis
        obcaecati molestiae neque eaque sint. Doloremque vero ipsa quaerat quasi
        necessitatibus, eligendi minima non? Rerum qui neque, sapiente et
        maiores fuga dicta cupiditate totam ipsa blanditiis aliquam perferendis
        minus accusamus omnis nesciunt. Consequatur architecto, magnam non nam
        ducimus qui ullam voluptas quaerat maiores eveniet animi omnis quod
        provident possimus! Odio, aut nihil. Ipsum sed magnam dolore eos minus
        error, consequatur laboriosam alias? Eaque, blanditiis et. Error
        deserunt itaque eum voluptatum minima qui doloribus ipsam reiciendis
        accusantium similique non numquam quia, unde veritatis expedita corrupti
        quasi aspernatur fugiat voluptatibus dolor provident! Et consequuntur
        nesciunt quisquam voluptatem reiciendis doloremque praesentium fugiat,
        ullam atque modi nobis iste neque, vero fuga optio a facilis eligendi
        quibusdam molestiae nisi, in repellendus placeat tempore deserunt! Odit
        ipsum quaerat qui, amet, tempora officia veritatis quidem architecto,
        voluptates perferendis eaque. Molestiae, voluptatibus. Fugit consectetur
        totam similique autem mollitia reiciendis officia dolorem, eveniet
        doloribus! A nulla laudantium autem maiores excepturi quaerat repellat
        reiciendis modi, accusamus, ipsam eligendi dignissimos blanditiis ut vel
        dolorem saepe. Illo at recusandae ullam debitis, sequi deserunt
        dignissimos ducimus porro, optio vero nihil! Magnam facere consequuntur
        alias eos deserunt, adipisci odio sapiente. Quos beatae soluta harum
        consequatur odit assumenda, vero facilis sint ipsa odio recusandae,
        magnam reiciendis temporibus quis laboriosam ab dolores! Recusandae hic
        perspiciatis, dolorem tempore fugiat odit adipisci nisi cum assumenda
        doloribus, ut suscipit! Nesciunt, optio eius. A commodi blanditiis
        incidunt sapiente, unde veniam sequi nihil neque similique impedit
        debitis aspernatur temporibus. Ducimus quo, asperiores illo aliquam
        perferendis repudiandae velit molestias impedit necessitatibus earum
        nemo. In possimus maxime soluta corrupti tenetur nemo ipsa odit porro,
        vero error inventore perferendis id temporibus optio aspernatur dicta
        quisquam corporis? Praesentium soluta fugit nulla sapiente nobis eos
        deserunt fugiat, magnam sint quam! Perferendis porro commodi voluptatem
        ipsa, id quidem dolorem ea minus eligendi natus saepe adipisci molestiae
        repellat in maxime, voluptates aliquid praesentium cum nobis quas unde
        optio quis excepturi eum. Totam, amet labore. Aut dolorem maxime
        repudiandae provident. Ullam expedita non laudantium error voluptatibus
        repellat? Officia inventore temporibus ullam, exercitationem quaerat
        odit maxime repellat nulla dignissimos vitae voluptatibus quae, totam
        quod pariatur aspernatur modi nobis error deleniti architecto est
        doloribus unde eum harum iusto. Ad totam aut temporibus quia quibusdam
        provident, qui, iste excepturi libero ipsum numquam sequi dolorum.
        Nobis, cumque hic inventore repellendus eum vel ullam numquam nostrum
        nisi rerum odio. Animi earum accusantium adipisci dolor fugiat provident
        consequuntur debitis repellat totam tempore fuga, nobis voluptas
        laudantium. Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Accusantium officiis voluptatibus magnam earum, tenetur fuga eligendi
        aspernatur amet ad quos esse provident sed molestiae similique pariatur
        natus voluptatem hic minus ipsum asperiores. Provident repellendus
        laudantium numquam culpa earum, sed porro? Placeat, magni. Suscipit
        repellat ducimus excepturi eos non voluptates. Perspiciatis vero
        reprehenderit aliquam libero adipisci. Perspiciatis alias animi harum,
        aut deserunt corporis eligendi voluptatibus enim eius quia dolor cumque
        sint, soluta totam reiciendis doloremque et earum voluptas atque
        assumenda temporibus laboriosam, ea expedita? Quod, consequatur quasi
        tempora magni dolores odit esse, voluptate quia ea eum dicta, quae nisi
        pariatur inventore exercitationem soluta natus nihil sunt? Deserunt
        tempora ratione unde labore! Sequi voluptas unde architecto cupiditate
        obcaecati magnam voluptatem, dolorum soluta veniam ipsam molestias
        tempora maxime ipsa explicabo id culpa amet neque totam, quia eaque
        atque, at ducimus eligendi quaerat. Autem incidunt aperiam illum debitis
        doloremque, quidem quia amet quam fuga accusantium molestias dolorum
        itaque facilis laboriosam praesentium deleniti at reiciendis temporibus
        nihil minus. Perspiciatis deleniti veniam nihil magni, suscipit mollitia
        soluta. Vero et, itaque eaque tenetur dolorem esse, soluta aspernatur
        vitae, corporis similique dolor nihil distinctio! Accusamus, pariatur.
        Dolorem totam suscipit aperiam inventore obcaecati quae, iste
        accusantium reprehenderit dolore iure, distinctio provident corrupti
        dicta laboriosam sapiente, tempore temporibus explicabo. Accusamus, sed!
        Accusantium quam repellendus repellat debitis suscipit blanditiis
        impedit eos perferendis unde, nobis, nihil mollitia ex a rem est numquam
        similique beatae! Corporis sit repellat amet vero error omnis quaerat
        eum quas soluta animi esse ipsam minima laborum aliquam totam, et, optio
        impedit voluptatibus nihil sint hic. Repellendus illum cum ducimus
        dolores corporis placeat aliquam fugiat, ut nam quasi, id eaque fuga
        amet nostrum velit doloremque, necessitatibus debitis minima vero quis.
        Nisi debitis natus iure, soluta, necessitatibus distinctio quod maxime
        itaque velit dolor atque dolores corrupti est et vero non sint placeat
        officia. Ipsum itaque repudiandae, eius facere vitae voluptates vel
        autem deleniti minima. Vitae ipsam tempora in facilis mollitia nobis
        sit, temporibus fugit quo esse voluptas fuga corporis asperiores illum
        deserunt saepe culpa aspernatur cupiditate accusantium minima? Nesciunt
        distinctio eaque repellat placeat, ea architecto voluptas atque nihil
        nulla aliquid! Facere molestias impedit aperiam soluta ipsum. Nam
        quaerat nihil minima architecto tenetur quod ratione eveniet, ut aut
        aliquam voluptas, quisquam corrupti vel, animi natus repudiandae et.
        Deserunt id blanditiis quibusdam, voluptas error in harum quae tempora
        non aliquam, sequi nemo amet cupiditate aperiam adipisci illum dolor eum
        ipsum praesentium ab quod autem unde quis. Quae quam ipsum dolores
        suscipit sint tempora minus totam maiores hic delectus blanditiis
        laudantium temporibus laborum ex vero labore magni quo, ad excepturi
        perferendis, nemo sequi possimus cumque rem. Quas ipsam ut ullam velit
        adipisci perferendis odit, quidem repellat dolorem! Totam temporibus
        veritatis reprehenderit vel eum voluptatem eos id. Veritatis aliquid
        facere ut, molestias itaque debitis pariatur fuga obcaecati quam
        doloremque porro iure nulla consequuntur cum, aliquam eaque placeat
        distinctio error, amet odio deserunt dicta odit! Veniam expedita
        deserunt doloremque cupiditate vitae ut nisi non pariatur, quae optio
        consequatur accusamus voluptas veritatis magnam soluta sequi nostrum.
      </div>
    </div>
  );
}

export default App;
