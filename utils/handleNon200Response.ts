/** @internal */
export async function handleNon200Response(response: Response) {
  if (response.status !== 200) {
    let message: string;
    try {
      const data = await response.json();
      if (!data.status_message) throw new Error();
      message = data.status_message;
    } catch {
      message = response.statusText;
    }
    throw new Error(message, { cause: response });
  }
}
