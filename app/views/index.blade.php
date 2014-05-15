@extends('master')

@section('content')

{{ Form::open(array('route' => 'show')) }}
	<p>
		{{ Form::label('value', 'Users:') }}
		{{ Form::select('value', array($actives => 'Actives', $inactives => 'Inactives', $total => 'All')) }}
	</p>

	<p>{{ Form::submit('Accept', array('class' => 'btn btn-default')) }}</p>
{{ Form::close() }}

@stop
