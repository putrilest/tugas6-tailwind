import {BsFillCircleFill} from "react-icons/bs"

const Products = () => {
  const products = [
    {
      id: 1,
      judul: "Project 1 Infak PUB",
      gambar: "produk1.jpeg",
      deskripsi:"Website yang dibuat untuk bendehara eksternal pub dalam mengelola infak dari alumni sebagai pemasukan pub",
      link: "https://github.com/putrilest/projek_infak.git",
    },
    {
      id: 2,
      judul: "Project 2 Sky Invest",
      gambar: "produk2.jpeg",
      deskripsi:"Website yang dikembangkan untuk menyediakan informasi reksadana investasi yang ada di Indonesia. ",
      link: "https://github.com/putrilest/PROJEKAN-WEB.git",
    },
    {
      id: 3,
      judul: "Project 3 Iphone Store",
      gambar: "produk3.jpeg",
      deskripsi:"website sotre yang menjual berbagai produk iphone",
      link: "https://github.com/putrilest/uts-react.git",
    }
  ];

  return (
    <div className="h-[565px] bg-zinc-200">
      <div className=" mx-64 tablet:mx-24 mobile:mx-2">
        <div className="flex">
          <div className="font-bold text-4xl py-3 ">Project</div>
          <div className="flex text-3xl tablet:text-3xl mobile:text-2xl mobile:justify-center pl-2 pt-2">
            <div className="text-red-400 pt-3"><BsFillCircleFill/></div>
            <div className="text-orange-300 pt-3 px-2"><BsFillCircleFill/></div>
            <div className="text-sky-300 pt-3"><BsFillCircleFill/></div>
          </div>
        </div>

        <div className="grid gap-4 grid-rows-3 mobile:gap-1 mobile:grid-rows-1 tablet:gap-2 tablet:grid-rows-2"> 
        {products.map((product)=>(
          <div key={product.id} className="flex bg-zinc-400 rounded-md p-8">
            <a target="blank" href={product.link}><img className="h-[80px] w-[150px] hover:h-[90px] hover:w-[160px]" src={product.gambar} alt="" /></a>
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