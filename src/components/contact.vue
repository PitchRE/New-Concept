<template>
  <div>
    <div class="uk-container uk-container-small">
      <h2 style="font-weight: 600">Kontakt</h2>
      <div class="uk-grid">
        <div class="uk-width-1-2 uk-animation-fade">
          <legend class="uk-legend">Dane teleadresowe:</legend>

          <br />
          <br />

          <b>
            <p>Adres:</p>
          </b>
          <font-awesome-icon icon="map-marked-alt" />&nbsp; Piekary, 32-100 Proszowice
          <br />
          <br />
          <b>
            <p>Tel:</p>
          </b>
          <font-awesome-icon icon="phone" />
          <span>&nbsp;48+ 127132356</span>

          <br />
          <br />
          <b>
            <p>Email:</p>
          </b>
          <font-awesome-icon icon="envelope" />&nbsp; biuro@example.com
          <br />
          <br />
        </div>
        <div class="uk-width-1-2 uk-animation-fade">
          <form>
            <fieldset action="/action.php" method="POST" class="uk-fieldset">
              <legend class="uk-legend">Formularz Kontaktowy</legend>

              <div class="uk-margin">
                <input name="imie" class="uk-input" type="text" placeholder="Imię" />
              </div>

              <div class="uk-margin">
                <input name="email" class="uk-input" type="email" placeholder="Email" />
              </div>

              <div class="uk-margin">
                <input name="topic" class="uk-input" type="text" placeholder="Temat Wiadomości" />
              </div>

              <div class="uk-margin">
                <textarea class="uk-textarea" rows="5" placeholder="Tekst wiadomości."></textarea>
              </div>

              <input class="uk-button uk-button-default" type="submit" value="Wyślij" />
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>