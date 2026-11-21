import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch(process.env.N8N_WEBHOOK_URL!, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'z-api-key': process.env.N8N_API_KEY!,
      },
      body: JSON.stringify({
        name: body.name,
        email: body.email,
        mobile: body.mobile,
        description: body.description,
        message: body.message,
      }),
    });

    if (!response.ok) {
      return NextResponse.json(
        { error: 'Workflow execution failed' },
        { status: response.status }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
