<script setup>
useHead({
  title: 'Project',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.projects') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"/>
        </div>

        <h3 class="h3">
          Contributed Projects
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <a class="h4 timeline-item-title" href="https://www.punhlainghospitals.com/heal-app/">
            Heal By Pun Hlaing
          </a>

          <p class="timeline-text">
            Developed and launched the HEAL by Pun Hlaing App, Myanmar's first hospital-led
            telehealth application. This mobile platform offers 24/7 on-demand telehealth services,
            empowering individuals across Myanmar to proactively manage their health and adopt an
            active lifestyle. The app, standing for 'Health Empowerment and Active Living,
            ' draws on
            Pun Hlaing Hospitals' extensive healthcare infrastructure, strategically located across the
            country. With a commitment to healthcare inclusion, the app addresses accessibility
            challenges, providing timely medical support and information to users, including those in
            remote areas or with limited mobility. Taglined as "HEAL, Your Health In Your Hands,
            " the
            app encourages Myanmar's mobile-first population to experience the convenience of
            accessing medical services and information anytime, anywhere.
          </p>

        </li>

        <li class="timeline-item">
          <a class="h4 timeline-item-title" href="https://www.synpitarn.com/">
            Synpitarn ( Picofinance )
          </a>

          <p class="timeline-text">
            Dedicated to enhancing individual well-being, I have actively contributed to a financial
            service company, delivering efficient financial management services with a focus on
            optimizing fund utilization.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            TTAS ( Internal Approval Software )
          </h4>

          <p class="timeline-text">
            Implemented a feature for role and permission management within an application,
            facilitating effective administration of diverse user roles.
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            EM ( Pun Hlaing Estate Management )
          </h4>

          <p class="timeline-text">
            Designed a voucher creation system for apartments, efficiently managing and recording
            details such as rental and financial transactions within the system.
          </p>
        </li>

        <li class="timeline-item">
          <a class="h4 timeline-item-title" href="https://www.cityrewards.com.mm/thegoodlife">
            The GoodLife by CMHL ( Life Style Platform )
          </a>
          <p class="timeline-text">
            Contributed to the development of a lifestyle magazine aimed at providing
            comprehensive solutions for individuals in their busy daily lives. Utilized October CMS
            (Laravel) for robust content management and Leaflet for map rendering to enhance user
            experience.
          </p>
        </li>

        <li class="timeline-item">
          <a class="h4 timeline-item-title" href="https://standby.bob.onenex.dev/quick-buy-landing">
            Balloons Over Bagan
          </a>
          <p class="timeline-text">
            Designed and implemented a ticketing system for the sale and monitoring of balloon
            tickets. Successfully integrated third-party payment options, including 2c2p and Wave
            Pay, to enhance payment functionalities.
          </p>
        </li>

        <li class="timeline-item">
          <a class="h4 timeline-item-title" href="https://inflight.balloonsoverasia.com/">
            Inflight Photos For Balloons Over Bagan
          </a>
          <p class="timeline-text">
            Developed a photo download functionality via email for balloon riders, allowing
            individuals to easily access and download their own ride photos.
          </p>
        </li>

        <li class="timeline-item">
          <a class="h4 timeline-item-title" href="https://www.211sport.com/?show=all&dates=2024-03-02&byTime=false&search=">
            Real Time Soccer
          </a>
          <p class="timeline-text">
            Developed a feature allowing users to check live match scores for tracking their favorite
            teams and players. Implemented detailed statistics, events, lineups, and standings to
            provide comprehensive information during live matches.
          </p>
        </li>

        <li class="timeline-item">
          <a class="h4 timeline-item-title">
            Events ( Event Ticketing System For Internal Projects)
          </a>
          <p class="timeline-text">
            Designed and implemented a ticketing system to facilitate the sale and monitoring of
            tickets. Successfully integrated third-party payment options, such as 2c2p and Wave Pay,
            to optimize payment functionalities for a specific duration.
          </p>
        </li>
      </ol>
    </section>
  </article>
</template>
