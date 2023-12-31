from flask import Flask, request, jsonify, send_file
import io
import torch
from torch import autocast
from diffusers import StableDiffusionPipeline
app = Flask(__name__)
assert torch.cuda.is_available()
pipe = StableDiffusionPipeline.from_pretrained(
        "CompVis/stable-diffusion-v1-4", 
        use_auth_token=True
).to("cuda")
def run_inference(prompt):
  with autocast("cuda"):
  #import pdb;pdb.set_trace()
      image = pipe(prompt).images[0]  
  img_data = io.BytesIO()
  image.save(img_data, "PNG")
  img_data.seek(0)
  return img_data
@app.route('/api/search', methods = ['POST'])
def myapp():
    #if "prompt" not in request.args:
    #    return "Please specify a prompt parameter", 400
    data = request.get_json()
    print(data)
    prompt = data.get('query')
    img_data = run_inference(prompt)
    return send_file(img_data, mimetype='image/png')

if __name__ == "__main__":
	app.run()

