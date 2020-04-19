export const sendReqParams = (req: { params: { id: string }}, res: any) => {
  const id = req.params.id;
  res.send(`${id}`)
}