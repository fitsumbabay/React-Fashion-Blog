import React from "react";
import "./Article.css";

function Article() {
    return (
      <>
        <article>
          <p>11/12/20</p>
          <h2>On the Street in Brookly</h2>
          <img src="/images/blog-image-1.jpg" alt="Fashion images" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            lacinia odio vitae vestibulum vestibulum.Curabitur commodo orci sed
            felis imperdiet, sit amet consectetur lectus faucibus.Curabitur
            commodo orci sed felis imperdiet, sit amet consectetur lectus
            faucibus.
          </p>

          <h6>Continues...</h6>
        </article>

        <article>
          <p>11/11/20</p>
          <h2>Vintage in Vogue</h2>
          <img src="/images/blog-image-2.jpg" alt="Fashion images" />
          <p>
            Curabitur commodo orci sed felis imperdiet, sit amet consectetur
            lectus faucibus.Curabitur commodo orci sed felis imperdiet, sit amet
            consectetur lectus faucibus.Curabitur commodo orci sed felis
            imperdiet, sit amet consectetur lectus faucibus.Curabitur commodo
            orci sed felis imperdiet, sit amet consectetur lectus faucibus.
          </p>
          <h6>Continues...</h6>
        </article>
      </>
    );
}

export default Article;