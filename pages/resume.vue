<script setup>
useHead({
  title: 'Resume',
})
</script>

<template>
  <article class="resume active" data-page="resume">
    <header>
      <h2 class="h2 article-title">
        {{ $t('pageTitles.resume') }}
      </h2>
    </header>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"/>
        </div>

        <h3 class="h3">
          Education
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            University Of People, Computer Science
          </h4>

          <span>2022 — Present</span>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Dagon University, Computer Science
          </h4>

          <span>2017 — 2022</span>

          <!--          <p class="timeline-text">-->
          <!--            Nemo enims ipsam voluptatem, blanditiis praesentium voluptum delenit atque corrupti, quos dolores et-->
          <!--            quas molestias-->
          <!--            exceptur.-->
          <!--          </p>-->
        </li>
      </ol>
    </section>

    <section class="timeline">
      <div class="title-wrapper">
        <div class="icon-box">
          <ion-icon name="book-outline"/>
        </div>

        <h3 class="h3">
          Experience
        </h3>
      </div>

      <ol class="timeline-list">
        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Junior Full Stack Developer
          </h4>

          <span>2023 — Present</span>

          <p class="timeline-text">
            <ol style="list-style-type: circle;">
              <li class="timeline-text">• Develop high-quality backend code for services.</li>
              <br>
              <li class="timeline-text">• Design and implement domain-driven architecture and backend services.</li>
                            <br>
              <li class="timeline-text">• Resolve issues and bugs in existing projects promptly.</li>
              <br>
              <li class="timeline-text">• Build both frontend and backend systems for web applications.</li>
              <br>
              <li class="timeline-text">• Contribute to an internal open-source package.</li>
              <br>
              <li class="timeline-text">• Contribute to the development of an internal project starter kit.</li>br
            </ol>
          </p>
        </li>

        <li class="timeline-item">
          <h4 class="h4 timeline-item-title">
            Intern Web Developer
          </h4>

          <span>2022 — 2023</span>

          <p class="timeline-text">
            <ul>
              <li class="timeline-text">• Gained extensive knowledge in IT and acquired hands-on experience through
                participation in various projects.
              </li>
              <br>
              <li class="timeline-text">• Contributed to the development of events and ticketing systems, with a notable
                project highlight being "Balloons Over Bagan".
              </li>
              <br>
              <li class="timeline-text">• Actively involved in at least three distinct projects, showcasing versatility
                and
                adaptability.
              </li>
              <br>
              <li class="timeline-text">• Successfully completed a quick buy landing page project, accessible at
                https://standby.bob.onenex.dev/quick-buy-landing.
              </li>
              <br>
              <li class="timeline-text">• Acquired practical insights into real project work, reinforcing theoretical
                knowledge.
              </li>
            </ul>
          </p>
        </li>
      </ol>
    </section>

<!--    SKILL-->
<!--    <section class="skill">-->
<!--      <h3 class="h3 skills-title">-->
<!--        My skills-->
<!--      </h3>-->

<!--      <ul class="skills-list content-card">-->
<!--        <li class="skills-item">-->
<!--          <div class="title-wrapper">-->
<!--            <h5 class="h5">-->
<!--              Web design-->
<!--            </h5>-->
<!--            <data value="80">80%</data>-->
<!--          </div>-->

<!--          <div class="skill-progress-bg">-->
<!--            <div class="skill-progress-fill" style="width: 80%;"/>-->
<!--          </div>-->
<!--        </li>-->

<!--        <li class="skills-item">-->
<!--          <div class="title-wrapper">-->
<!--            <h5 class="h5">-->
<!--              Graphic design-->
<!--            </h5>-->
<!--            <data value="70">70%</data>-->
<!--          </div>-->

<!--          <div class="skill-progress-bg">-->
<!--            <div class="skill-progress-fill" style="width: 70%;"/>-->
<!--          </div>-->
<!--        </li>-->

<!--        <li class="skills-item">-->
<!--          <div class="title-wrapper">-->
<!--            <h5 class="h5">-->
<!--              Branding-->
<!--            </h5>-->
<!--            <data value="90">90%</data>-->
<!--          </div>-->

<!--          <div class="skill-progress-bg">-->
<!--            <div class="skill-progress-fill" style="width: 90%;"/>-->
<!--          </div>-->
<!--        </li>-->

<!--        <li class="skills-item">-->
<!--          <div class="title-wrapper">-->
<!--            <h5 class="h5">-->
<!--              WordPress-->
<!--            </h5>-->
<!--            <data value="50">50%</data>-->
<!--          </div>-->

<!--          <div class="skill-progress-bg">-->
<!--            <div class="skill-progress-fill" style="width: 50%;"/>-->
<!--          </div>-->
<!--        </li>-->
<!--      </ul>-->
<!--    </section>-->
  </article>
</template>
