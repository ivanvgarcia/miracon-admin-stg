<template>
  <div>
    <a-carousel autoplay>
      <div>
        <h1 class="carousel-slide-title">Hivelocity Vue Template</h1>
        <h4 class="carousel-slide-description">
          Starter Vue template for front end applications deployed by Hivelocity developers.
        </h4>
      </div>
      <div>
        <h1 class="carousel-slide-title">About</h1>
        <h4 class="carousel-slide-description">
          Created for quick and efficient front end development
          using React.js and other modern web technologies and tools.
        </h4>
      </div>
    </a-carousel>

    <div class="heading">
      <h2>Features</h2>
    </div>

    <div class="container">
      <a-row :gutter="[16, { xs: 8, sm: 16, md: 24, lg: 32 }]">
        <a-col :xs="24" :md="12" :lg="8">
          <a-card hoverable class="card">
            <img
              alt="vue logo"
              src="../assets/logo.png"
              slot="cover"
            />
            <a-card-meta title="Made with Vue.js">
              <template slot="description">
                <p>
                  A highly performant and approachable JavaScript
                  framework to build full featured web applications.
                </p>
                <a href="https://vuejs.org/v2/guide/" target="_blank" rel="noopener noreferrer">
                  Vue Documentation
                </a>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :xs="24" :md="12" :lg="8">
          <a-card hoverable>
            <img
              alt="example"
              src="../assets/images/ant_logo.png"
              slot="cover"
            />
            <a-card-meta title="Styled with Ant Design">
              <template slot="description">
               <p>
                  A design system for enterprise-level products. Create an efficient and enjoyable
                  work experience. To learn more, check out the documentation:
                </p>
                <a href="https://ant.design/" target="_blank" rel="noopener noreferrer">
                  Ant Design Documentation
                </a>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
        <a-col :xs="24" :md="12" :lg="8">
           <a-card hoverable class="card">
            <img
              alt="vue logo"
              src="../assets/images/Octocat.png"
              slot="cover"
            />
            <a-card-meta title="Automated Deployment">
              <template slot="description">
             <p>
                Configured to deploy automatically using Github actions to Amazon Web Services.
                To learn more, check out the documentation:
              </p>
              <a
                href="https://github.com/features/actions"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github Actions
              </a>
              </template>
            </a-card-meta>
          </a-card>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style lang="less">
.heading {
  margin: 3rem 0;
  text-align: center;
  h2 {
    font-size: 3rem;
  }
}
.container {
  max-width: 90%;
  width: 130rem;
  margin: 0 auto;
}
.carousel {
  &-slide {
        &-title {
        color: white;
        font-size: 2.6rem;
        }
        &-description {
          color: white;
          font-size: 1.2rem;
          line-height: 1.4;
          max-width: 90%;
          width: 600px;
          margin: 0 auto;
      }
    }
 }

.ant-carousel .slick-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    min-height: 60vh;
    background: #1DA57A;
    overflow: hidden;
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, .3), rgba(0, 0, 0, .6)),
        url('../assets/images/header.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.slick-slide.slick-active.slick-current {
  display: flex;
  align-items: center;
}

.ant-carousel .slick-slide[data-index="1"] {
    background-image: linear-gradient(to bottom,
    rgba(0, 0, 0, .3), rgba(0, 0, 0, .6)),
    url('../assets/images/office.jpg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}

.ant-carousel .slick-dots li button {
    height: 8px;
}

.ant-card-cover {
  padding: 10px;
  display: flex;
  justify-content: center;
  img {
    width: 40%;
  }
}

.ant-card-meta-description a,
.ant-descriptions-item-content a,
  {
  font-size: 1rem;
  font-weight: 900;
}
</style>
