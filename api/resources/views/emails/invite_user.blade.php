@component('mail::message')

<div>
    Hi {{ $name }}<br/><br/>
</div>
<div>
    You are invited to join {{ $app }}.<br/>
    <br/>
    Use below invitation link.
    <br/>
    {{ $reset_link }}
</div>

<br/>
<br/>
<br/>
Thanks,<br>
{{ config('app.name') }}
@endcomponent
