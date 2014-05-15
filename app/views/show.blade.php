@extends('master')

@section('content')

<script type="text/javascript">
	setInterval(function() {
		i = {{ $value }};
	}, 16);
</script>
<?= javascript_include_tag('visualization') ?>

@stop
