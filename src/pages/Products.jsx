import {SiOpenproject, SiPolymerproject} from "react-icons/si"
import {FaProjectDiagram} from "react-icons/fa"

const Products = () => {
  const products = [
    {
      id: 1,
      judul: "Project 1 Infak PUB",
      gambar: <SiOpenproject className="h-[60px] w-[100px] hover:text-red-400 tablet:h-[50px] tablet:w-[80px]  mobile:h-[40px] mobile:w-[70px]"/>,
      deskripsi:"Website yang dibuat untuk bendehara eksternal pub dalam mengelola infak dari alumni sebagai pemasukan pub.",
      link: "https://github.com/putrilest/projek_infak.git",
    },
    {
      id: 2,
      judul: "Project 2 Sky Invest",
      gambar: <SiPolymerproject className="h-[60px] w-[100px] hover:text-orange-400 tablet:h-[50px] tablet:w-[80px]  mobile:h-[40px] mobile:w-[70px]"/>,
      deskripsi:"Website yang dikembangkan untuk menyediakan informasi reksadana investasi yang ada di Indonesia. ",
      link: "https://github.com/putrilest/PROJEKAN-WEB.git",
    },
    {
      id: 3,
      judul: "Project 3 Iphone Store",
      gambar: <FaProjectDiagram className="h-[60px] w-[100px] hover:text-sky-400  tablet:h-[50px] tablet:w-[80px]  mobile:h-[40px] mobile:w-[70px]"/>,
      deskripsi:"Websie Store yang menjual berbagai produk iphone seperti handphone, watch, dll.",
      link: "https://github.com/putrilest/uts-react.git",
    }
  ];

  return (
    <div className="h-full py-4 bg-zinc-200">
      <div className=" mx-64 tablet:mx-24 mobile:mx-6">
        <div className="flex text-4xl tablet:text-3xl mobile:text-2xl font-bold mobile:justify-center">
          <div className="font-sans py-3">Recent <span className="text-red-400 text-4xl tablet:text-3xl mobile:text-2xl">Project</span></div>
        </div>

        <div className="flex flex-col gap-4 tablet:gap-3 mobile:gap-2"> 
        {products.map((product)=>(
          <div key={product.id} className="flex bg-zinc-400 rounded-md p-6 tablet:p-4 mobile:p-2">
            <a target="blank" href={product.link}>
              {product.gambar}
            </a>
            <div className="pl-4">
              <h1 className="text-xl font-bold tablet:text-base mobile:text-sm">{product.judul}</h1>
              <p className="tablet:text-sm mobile:text-xs">{product.deskripsi}</p>
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>

  )
}

export default Products