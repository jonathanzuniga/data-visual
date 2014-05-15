<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="chrome=1">

    {{ stylesheet_link_tag() }}

    {{ javascript_include_tag() }}

    <title>Data visualization</title>
  </head>
  
  <body>
    @yield('content')
  </body>
</html>