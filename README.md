<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>XV Años | Devany Estrella</title>

<link rel="stylesheet" href="style.css">

<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Great+Vibes&family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

</head>

<body>

<div id="loader">
<h2>✨ Cargando invitación ✨</h2>
</div>

<header class="hero">

<div class="overlay">

<h3>Mis XV Años</h3>

<h1>Devany Estrella<br>Velázquez Espinoza</h1>

<p>
Con la bendición de Dios y el amor de mi familia
</p>

<a href="#inicio" class="btn">
Ver invitación
</a>

</div>

</header>

<section id="inicio">

<h2>Te invito a celebrar conmigo</h2>

<p>

Hay momentos inolvidables que se atesoran para siempre.

Por eso deseo compartir contigo la alegría de celebrar mis XV años.

</p>

</section>

<section class="contador">

<h2>Faltan...</h2>

<div id="countdown">

<div>
<span id="dias">00</span>
<p>Días</p>
</div>

<div>
<span id="horas">00</span>
<p>Horas</p>
</div>

<div>
<span id="minutos">00</span>
<p>Minutos</p>
</div>

<div>
<span id="segundos">00</span>
<p>Segundos</p>
</div>

</div>

</section>

<section>

<h2>Ceremonia Religiosa</h2>

<p>

⛪ Parroquia San Jorge

<br><br>

📍 Secretaría de Recursos Hidráulicos y Calle 24

Col. San Jorge

<br><br>

🕕 6:00 PM

</p>

<a
class="btn"
href="https://maps.app.goo.gl/otoboVU8MR5jkTrX8?g_st=aw"
target="_blank">

Ver ubicación

</a>

</section>

<section>

<h2>Recepción</h2>

<p>

🎉 Salón de Eventos Granja Los Cota

<br><br>

Av. Nueva España #4007

Col. 3 de Mayo

<br><br>

🕘 9:00 PM

</p>

</section>

<section>

<h2>Mis Padres</h2>

<p>

Ángel Eduardo Velázquez García

<br>

Yolanda Viviana Espinoza Leyva

</p>

</section>

<section>

<h2>Padrinos</h2>

<p>

Héctor Ricardo García Zavala

<br>

Zabdy Vanessa Pérez Leyva

</p>

</section>

<section>

<h2>Lluvia de Sobres</h2>

<p>

El mejor regalo es tu presencia.

Si deseas tener un detalle conmigo,

agradeceré tu obsequio en sobre.

💜

</p>

</section>

<section>

<h2>Confirma tu asistencia</h2>

<a
class="btn"
href="https://wa.me/526147659323">

WhatsApp

</a>

</section>

<script src="script.js"></script>

</body>
</html>
/* Animación de aparición */
section{
    opacity:0;
    transform:translateY(40px);
    animation:aparecer 1s ease forwards;
}

section:nth-child(2){animation-delay:.3s;}
section:nth-child(3){animation-delay:.6s;}
section:nth-child(4){animation-delay:.9s;}

@keyframes aparecer{
    from{
        opacity:0;
        transform:translateY(40px);
    }
    to{
        opacity:1;
        transform:translateY(0);
    }
}

/* Botón con efecto */
.btn{
    transition:.3s;
}

.btn:hover{
    transform:scale(1.08);
    box-shadow:0 10px 30px rgba(212,175,55,.5);
}

/* Tarjetas */
section{
    background:white;
    margin:30px auto;
    width:90%;
    max-width:900px;
    border-radius:25px;
    box-shadow:0 10px 30px rgba(0,0,0,.12);
}

/* Fondo */
body{
    background:linear-gradient(180deg,#f7e8ff,#ffffff,#f2d7ff);
}
