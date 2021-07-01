<!-- /*
@Author: Saijivan Maheswaran
@version: 1.0v
@Latest Update: 24.06.2021
Status: Done

Descripton:  Student Record Management system. It efficiently allows users to perform CRUD operations.
             Schüler Datenbank Mangament system. Erlaubt den Nutzer effizient CRUD Operationen durchzuführen.

*/
-->


<template>
  <div class="container">
    <header class="jumbotron">
      <!--  <h3>{{content}}</h3>-->
      <h3>Hallo und willkommen</h3>
    </header>
    <div class="kontakt">
      Falls hilf bruchsch, kontaktier ihn.
      <br />
      <br />
      <h4>Adresse:</h4>
      Dürr Informatik GmbH<br />
      Alte Winterthurerstrasse 218<br />
      8309 Breite-Nürensdorf<br />
      <br>
      <table>
        <tbody>
          <tr>
            <td>Telefon +41 (0)44 865 56 24</td>
          </tr>
          <tr>
            <td> Telefax +41 (0)44 865 55 84</td>
          </tr>
        </tbody>
      </table>
    </div>
    <br>
      Rofl Furry <br />
    Elektroingenieur FH, Betriebsoekonom dipl. oek.<br>
    E-Mail: rolf.duerr@duerr-informatik.ch
    <div class="col"><img src="./Dürr.jpg" /></div>
  </div>
</template>

<style scoped>
.col {
  
  flex: 1; /* additionally, equal width */
  padding: 1em;
  hyphens: auto;
  text-align: justify;
}

.kontakt {
  display: block;
  font-family: Verdana, sans-serif;
  font-size: 14px;
}
table {
  display: block;
  border-collapse: separate;
  box-sizing: border-box;
  text-indent: initial;
  border-spacing: 2px;
  border-color: grey;
}

tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td {
  display: table-cell;
  vertical-align: inherit;
}
#textfirma1 {
    float: left;
    padding-left: 10px;
}
</style>