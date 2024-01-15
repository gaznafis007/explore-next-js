import React from "react";
import Title from "../Components/title";
import img from "../../public/pexels-photo.jpeg";
import Image from "next/image";

export default function Product() {
  // throw new Error({ message: "Oops!, there is an error!" });
  return (
    <div>
      <Title>This is product page</Title>
      <p className="mt-2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ullam,
        dolor quibusdam odit nemo veritatis voluptatum, ratione, possimus
        laboriosam autem accusantium amet! Voluptatibus fugiat in aliquam
        voluptate maxime inventore quos error quae placeat cumque. Voluptas
        fugiat totam amet ad itaque dolores ratione doloribus! Alias, beatae!
        Cupiditate quod rerum nulla consequatur dolorem nihil esse
        exercitationem, eius consectetur quidem quo tempora consequuntur vel
        inventore nisi. Minus in veniam magnam nihil voluptas officiis sequi,
        atque sunt, cum consequuntur numquam quisquam quis corporis, esse a sint
        mollitia iusto laudantium ratione iste? Molestias officiis cum debitis
        animi quas minus quam dolore facilis voluptatem totam assumenda
        similique, dolores, placeat eveniet enim sint eaque et maxime aliquam
        illo eos fuga itaque ab. Nesciunt veritatis vero cum quo alias hic unde,
        nemo dicta omnis, expedita magni incidunt dolor dolorem illum nobis
        eveniet quas aperiam. Ipsa nesciunt ut maxime, qui cum sit vero officiis
        quibusdam aut, praesentium architecto saepe quam? Perspiciatis id
        molestias ipsum soluta consectetur vitae fugit numquam illo, illum
        beatae nobis aliquid odio natus exercitationem assumenda culpa
        consequuntur obcaecati! Repellat repellendus id iste labore expedita
        obcaecati, suscipit fuga molestiae ducimus quas sapiente explicabo
        distinctio minus, cum facere sed, ratione nisi earum tenetur atque
        doloremque magnam. Unde, illo.
      </p>
      <Image placeholder="blur" src={img} alt="img" />
    </div>
  );
}
