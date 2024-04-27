<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Mail\Mailables\Address;
use Illuminate\Mail\Mailables\Attachment;
use Illuminate\Mail\Mailables\Content;
use Illuminate\Mail\Mailables\Envelope;
use Illuminate\Queue\SerializesModels;

class BugCreated extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     */
    public function __construct(private string $title, private string $description, private array $mailAttachments, private string $replyItTo){}

    /**
     * Get the message envelope.
     */
    public function envelope(): Envelope
    {
        return new Envelope(
            subject: 'Bug Created',
            replyTo: [
                new Address($this->replyItTo, "User"),
            ]
        );
    }

    /**
     * Get the message content definition.
     */
    public function content(): Content
    {
        return new Content(
            markdown: 'emails.bug_created',
            with:
            [
                'title'=> $this->title,
                'description'=> $this->description
            ]
        );
    }

    /**
     * Get the attachments for the message.
     *
     * @return array<int, \Illuminate\Mail\Mailables\Attachment>
     */
    public function attachments(): array
    {
        $attach = [];
        foreach ($this->mailAttachments as $attachment) {
            $attach[] = Attachment::fromPath($attachment->getRealPath())
            ->as($attachment->getClientOriginalName())
            ->withMime($attachment->getClientMimeType());
        }
        return $attach;
    }
}
