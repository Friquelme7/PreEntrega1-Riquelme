export const ItemDetail = ({ item }) => {
    return (
        <div className="bg-[#e0e2e6] rounded-3xl flex items-center ">
            <img src={item.img} alt="" />
            <div>
            <h2 className="font-alata font-medium mt-2 text-5xl">{item.productName} - {item.type}</h2>
                <p className="mb-2  text-2xl">{item.author}</p>
                <p>stock : {item.stock}</p>
                <p className="max-w-28 font-bold mb-2 text-lg">$ {item.precio}</p>
            </div>
        </div>
    );
}


