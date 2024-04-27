@component('mail::message')

<div>
    <strong><span>Title:</span></strong> {{ $title }}
</div>
<div>
    <strong><span>Description:</span> </strong>{{ $description }}
</div>

<br/>
<br/>
<br/>
Thanks,<br>
{{ config('app.name') }}
@endcomponent
