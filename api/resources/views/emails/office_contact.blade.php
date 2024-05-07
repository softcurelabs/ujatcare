@component('mail::message')

<div>
    <strong><span>Description:</span> </strong>{{ $description }}
</div>

<br/>
<br/>
<br/>
Thanks,<br>
{{ config('app.name') }}
@endcomponent
