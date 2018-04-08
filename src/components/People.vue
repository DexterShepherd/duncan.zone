<template>
  <div class='people page-container'>
    <h1 ref='peopleTitle' class='page-title'>WHO WE ARE<span class='orange'>.</span></h1>
    <div class="people-container">
      <div class="person">
        <h3 class='person-heading centered'> DUNCAN SHEPHERD </h3>
        <h3 class='person-subhead centered'> EDITOR / CREATIVE DIRECTOR </h3>
        <p class='person-bio'>
          Editing award winning music videos, commercials and films since the 1990’s in London, New York and Los Angeles, now building on strong relationships our VR partners like Jaunt VR, Supersphere, Spherica and Spectacle.
        </p>
      </div>
    </div>
    <div class="people-container">
      <div class="person">
        <h3 class='person-heading centered'> DARWIN MINARD </h3>
        <h3 class='person-subhead centered'> EDITOR </h3>
        <p class='person-bio'>
          For over a year now Darwin has been a lead element of the company, editing and delivering series content for the NFL, KIA, and Royal Carribean Cruises. A very solid guy to have on the case
        </p>
      </div>
    </div>
    <div class="people-container">
      <div class="person">
        <h3 class='person-heading centered'> VANESSA BROGNA </h3>
        <h3 class='person-subhead centered'> EDITOR </h3>
        <p class='person-bio'>
          Vanessa is a VR native, editing NFL, NBA, sizzles and promos with aplomb. Keeps taking on larger roles, we still haven’t found her limits.
        </p>
      </div>
    </div>
    <div class="people-container">
      <div class="person">
        <h3 class='person-heading centered'> BRIAN ZWEINER </h3>
        <h3 class='person-subhead centered'> EDITOR </h3>
        <p class='person-bio'>
          A long time editorial collaborator since before the days of VR, in addition to helping develop VR editing techniques for Paul McCartney, Brian is also deeply involved in our workflow architecture, keeping us ahead of ever more challenging technical formats and deliveries.
        </p>
      </div>
    </div>
  </div>
</template>

<style>

.people {
  padding-top: 50vh;
}

.people-container {
  display: flex; 
  justify-content: space-around
}

.person {
  max-width: 700px;
  padding: 20px 20%;
}

.person-heading {
  margin: 0;
  padding: 0;
}

.person-subhead {
  color: #dadada;
  margin: 0;
  padding: 0;
  font-weight: lighter;
  font-size: 1em;
}

.person-bio {
  padding-bottom: 20px;
  border-bottom: 1px solid #fdfdfd
}

.right {
  float: right;
}

</style>
